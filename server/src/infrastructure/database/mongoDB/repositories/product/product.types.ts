import { Document, Model } from 'mongoose'
import { ProductEntity } from '@domain/qrCode/entities/product'

export interface IProductDocument extends ProductEntity, Document {}
export type IProductModel = Model<IProductDocument>
