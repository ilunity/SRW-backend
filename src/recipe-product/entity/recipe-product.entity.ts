import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Recipe } from '../../recipe/entity/recipe.entity';
import { ApiHideProperty } from '@nestjs/swagger';
import { Product } from '../../product/entity/product.entity';
import { MEASUREMENT_TYPE } from './mesurement-types';

@Table({
  timestamps: false,
})
export class RecipeProduct extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ allowNull: false })
  measurement_type: MEASUREMENT_TYPE;

  @Column({ allowNull: false })
  measurement_value: number;

  @ForeignKey(() => Recipe)
  @Column
  recipe_id: number;

  @ApiHideProperty()
  @BelongsTo(() => Recipe)
  recipe: Recipe;

  @ForeignKey(() => Product)
  @Column
  product_id: number;

  @ApiHideProperty()
  @BelongsTo(() => Product)
  product: Product;
}
