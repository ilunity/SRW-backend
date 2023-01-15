import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entity/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';
import { FavouriteRecipe } from '../favourite-recipe/entity/favourite-recipe.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    @InjectModel(FavouriteRecipe)
    private favouriteRecipeModel: typeof FavouriteRecipe,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    return this.userModel.create({ ...dto });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findOne({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({
      where: { email },
    });
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async update(id: number, updateDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findByPk(id);
    return await user.update({ ...updateDto });
  }
}
