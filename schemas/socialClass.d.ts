import { Document, Model } from 'mongoose'

interface socialClassSchema extends Document {
    _id: string,
    uganCoins: number,
}

declare let settingsSchema: Model<socialClassSchema>
export = socialClassSchema