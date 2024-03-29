import { User } from '../../user/entity/user.entity';
import { Recipe } from '../../recipe/entity/recipe.entity';

export class ReadCommentDto {
  readonly id: number;
  readonly text: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly user: User;
  readonly recipe: Recipe;
}
