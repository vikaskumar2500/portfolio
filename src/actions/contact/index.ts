'use server'

import { FieldTypes } from '@/components/layout/contact-form'
import dbConnect from '@/lib/dbConnect'
import Contact from './schema'
import { sendEmailViaSMTP } from '@/lib/nodemailer'

export const createContact = async (data: FieldTypes) => {
  try {
    await dbConnect()

    // fetching existing details
    let contact = await Contact.findOne({ email: data.email })

    if (!contact) {
      // user contact is not present
      contact = await Contact.create({
        email: data.email,
        description: data.description,
        count: 1,
      })
      contact.save()
    } else if (contact.count < 4) {
      await Contact.updateOne(
        { email: contact.email },
        { description: data.description, count: Number(contact.count) + 1 },
      )
    } else {
      // if count exceeded 3 then we will only after 24hrs //24*60 min
      const currentDate = Date.now()
      const updatedAt = new Date(contact.updatedAt).getTime()
      const timeDiff = Math.round((currentDate - updatedAt) / (1000 * 60)) // diff in minutes
      if (timeDiff < 24 * 60) // 24hrs
        throw new Error('Your message limit has been exceeded!')

      // either we have to update the schema to set count 1
      await Contact.updateOne(
        {
          email: data.email,
        },
        { description: data.description, count: 1 },
      )
    }
    await sendEmailViaSMTP(contact.email, contact._id.toString())
    return { data: JSON.stringify(contact), error: null }
  } catch (e: any) {
    return { data: null, error: e.message }
  }
}
