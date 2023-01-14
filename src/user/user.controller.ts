import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { User } from './entity/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';
import { CreateCommentDto, ReadCommentDto } from '../comment/dto';
import { Comment } from '../comment/entity/comment.entity';
import { FavouriteRecipe } from '../favourite-recipe/entity/favourite-recipe.entity';
import { CreateFavouriteRecipeDto } from '../favourite-recipe/dto';
import { FavouriteRecipeService } from '../favourite-recipe/favourite-recipe.service';
import { CreateRatingDto, UpdateRatingDto } from '../rating/dto';
import { Rating } from '../rating/entity/rating.entity';
import { RatingService } from '../rating/rating.service';
import { CommentService } from '../comment/comment.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private commentService: CommentService,
    private favouriteRecipeService: FavouriteRecipeService,
    private ratingService: RatingService,
  ) {}

  /** Creates the User record */
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  /** Returns list of all users */
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  /** Returns the user by PK */
  @Get('/:user_id')
  findOne(@Param('user_id') userId: number): Promise<User> {
    return this.userService.findOne(userId);
  }

  /** Deletes the user */
  @Delete(':user_id')
  remove(@Param('user_id') userId: number) {
    return this.userService.remove(userId);
  }

  /** Updates the user */
  @Patch(':user_id')
  update(@Param('user_id') userId: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.update(userId, updateUserDto);
  }

  // ---------- comments ----------

  /** Creates user's comment for some recipe */
  @Post('comment')
  addComment(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
    return this.commentService.create(createCommentDto);
  }

  // todo Возвращает комментарии всех пользователей вместо одного
  /** Returns user comments */
  @Get(':user_id/comment')
  findComments(@Param('user_id') userId: number): Promise<ReadCommentDto[]> {
    return this.commentService.findAll();
  }

  @Delete('/comment/:comment_id')
  removeComment(@Param('comment_id') commentId: number) {
    this.commentService.remove(commentId);
  }

  // ---------- favourites ----------

  /** Adds recipe in favourites */
  @Post('favourite')
  addFavouriteRecipe(
    @Body() createFavouriteRecipeDto: CreateFavouriteRecipeDto,
  ): Promise<FavouriteRecipe> {
    return this.favouriteRecipeService.create(createFavouriteRecipeDto);
  }

  /** Remove the favourite recipe */
  @Delete('favourite/:favourite_id')
  removeFavouriteRecipe(@Param('favourite_id') favouriteId: number) {
    this.favouriteRecipeService.remove(favouriteId);
  }

  // ---------- rating ----------

  /** Rates some recipe */
  @Post('rating')
  rate(@Body() createRatingDto: CreateRatingDto): Promise<Rating> {
    return this.ratingService.create(createRatingDto);
  }

  /** Get the list of all user's rates */
  @Get(':user_id/rating')
  findAllRates(@Param('user_id') userId: number): Promise<Rating[]> {
    return this.ratingService.findAllByUser(userId);
  }

  /** Get the rate by PK */
  @Get('rating/:rating_id')
  findOneRate(@Param('rating_id') ratingId: number): Promise<Rating> {
    return this.ratingService.findOne(ratingId);
  }

  /** Updates the rate by PK */
  @Patch('rating/:rating_id')
  updateRate(
    @Param('rating_id') ratingId: number,
    @Body() updateRatingDto: UpdateRatingDto,
  ): Promise<Rating> {
    return this.ratingService.update(ratingId, updateRatingDto);
  }

  /** Deletes the rate by PK */
  @Delete('rating/:rating_id')
  removeRate(@Param('rating_id') ratingId: number) {
    return this.ratingService.remove(ratingId);
  }
}
