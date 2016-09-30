class PostsController < ApplicationController

  def index
    format_response(Post.all)
  end

  def create
    format_response(Post.create(post_params))
  end

  def show
    format_response(Post.find(params[:id]))
  end

  def upvote
    post = Post.find(params[:id])
    post.increment!(:upvotes)

    format_response(post)
  end

  private
  def post_params
    params.require(:post).permit(:link, :title)
  end

end
