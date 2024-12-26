"use client";

import { getPosts } from "@/api/posts";
import { PostContainer } from "@/components/common";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import type { User, UserId } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { ArrowRightIcon, PencilIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import classes from "./styles.module.css";

type Props = {
  user: User;
  loggedUserId: UserId;
  className?: string;
};

const PostsSection = (props: Props) => {
  const { user, loggedUserId, className } = props;

  const { isPending, data: posts } = useQuery({
    queryKey: ["postData"],
    queryFn: () => getPosts(user.posts),
  });

  // dont show when others view empty posts.
  if (loggedUserId !== user.id && !posts) return null;

  if (isPending) return <span>Loading...</span>;

  const renderEditAction = () => {
    if (!posts || loggedUserId !== user.id) return null;

    return <PencilIcon className="stroke-icon" />;
  };

  const renderAddPostBtn = () => {
    if (posts) {
      return (
        <div className={classes["show-posts"]}>
          <div className={classes["show-posts"]}>
            <span className="mr-1">Show all posts</span>
            <ArrowRightIcon size={16} />
          </div>
        </div>
      );
    }

    return (
      <Link href={"/"} className={classes["add-post"]}>
        <PlusIcon size={16} />
        <span>Add post</span>
      </Link>
    );
  };

  const renderRecentPosts = () => {
    if (!posts) return null;

    return user.posts.map(post => (
      <CarouselItem key={post}>
        <PostContainer post={posts[post]!} />
      </CarouselItem>
    ));
  };

  return (
    <section className={cn(classes["root"], className)}>
      <div className={classes["head-container"]}>
        <h2 className="mb-3">Posts</h2>

        {renderEditAction()}
      </div>

      <div>
        <Carousel>
          <CarouselContent>{renderRecentPosts()}</CarouselContent>

          <CarouselPrevious />

          <CarouselNext />
        </Carousel>
      </div>

      {renderAddPostBtn()}
    </section>
  );
};

export default PostsSection;
