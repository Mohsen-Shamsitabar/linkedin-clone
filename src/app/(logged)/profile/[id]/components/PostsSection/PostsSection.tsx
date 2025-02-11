"use client";

import { PostContainer } from "@/components/common";
import type { CarouselApi } from "@/components/ui";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { useLoggedUser, useProfileUser } from "@/contexts";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, PencilIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const PostsSection = (props: Props) => {
  const { className } = props;

  const profileUser = useProfileUser();
  const loggedUser = useLoggedUser();

  const [api, setApi] = React.useState<CarouselApi>();
  const [count, setCount] = React.useState(0);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!profileUser || !loggedUser) return null;

  const { posts, postsData } = profileUser;
  const postsCount = posts.length;

  // dont show when others view empty posts.
  if (loggedUser.id !== profileUser.id && !postsCount) {
    return null;
  }

  const renderEditAction = () => {
    if (!postsCount || loggedUser.id !== profileUser.id) return null;

    return <PencilIcon className="stroke-icon" />;
  };

  const renderPostsAction = () => {
    if (postsCount) {
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
    if (!postsCount) return null;

    return profileUser.posts.map(post => (
      <CarouselItem key={post}>
        <PostContainer post={postsData[post]!} />
      </CarouselItem>
    ));
  };

  const renderBackBtn = () => {
    if (!postsCount || current === 1) return null;

    return <CarouselPrevious variant="fill" className={classes["back-btn"]} />;
  };

  const renderNextBtn = () => {
    if (!postsCount || current === count) return null;

    return <CarouselNext variant="fill" className={classes["next-btn"]} />;
  };

  return (
    <section className={cn(classes["root"], className)}>
      <div className={classes["head-container"]}>
        <h2>Posts</h2>

        {renderEditAction()}
      </div>

      <div>
        <Carousel setApi={setApi} className="relative">
          <CarouselContent>{renderRecentPosts()}</CarouselContent>

          {renderBackBtn()}

          {renderNextBtn()}
        </Carousel>
      </div>

      {renderPostsAction()}
    </section>
  );
};

export default PostsSection;
