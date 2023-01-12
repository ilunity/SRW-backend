import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Recipe } from '../../recipe/entity/recipe.entity';
import { ApiHideProperty } from '@nestjs/swagger';
import { PUBLIC_ROLES } from './public-roles';
import { Comment } from '../../comment/comment.entity';
import { FavouriteRecipe } from '../../favourite-recipe/favourite-recipe.entity';
import { Rating } from '../../rating/entities/rating.entity';

@Table({
  timestamps: false,
})
export class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ allowNull: false })
  username: string;

  @Column({ allowNull: false, unique: true })
  email: string;

  @Column({ allowNull: false, defaultValue: PUBLIC_ROLES.USER })
  role: PUBLIC_ROLES;

  @ApiHideProperty()
  @HasMany(() => Recipe)
  recipes: Recipe[];

  @ApiHideProperty()
  @HasMany(() => Comment)
  comments: Comment[];

  @ApiHideProperty()
  @HasMany(() => FavouriteRecipe)
  favourite_recipes: FavouriteRecipe[];

  @ApiHideProperty()
  @HasMany(() => Rating)
  recipe_scores: Rating[];
}
