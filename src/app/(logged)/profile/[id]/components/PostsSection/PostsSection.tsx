"use client";

import { getPosts } from "@/api/posts";
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
import { useQuery } from "@tanstack/react-query";
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

  const { isPending, data: posts } = useQuery({
    queryKey: ["postData"],
    queryFn: () => getPosts(!profileUser ? [] : profileUser.posts),
  });

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

  const { id: loggedUserId } = loggedUser;

  // dont show when others view empty posts.
  if (loggedUserId !== profileUser.id && !posts) return null;

  if (isPending) return <span>Loading...</span>;

  const renderEditAction = () => {
    if (!posts || loggedUserId !== profileUser.id) return null;

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

    return profileUser.posts.map(post => (
      <CarouselItem key={post}>
        <PostContainer post={posts[post]!} />
      </CarouselItem>
    ));
  };

  const renderBackBtn = () => {
    if (current === 1) return null;

    return <CarouselPrevious variant="fill" className={classes["back-btn"]} />;
  };

  const renderNextBtn = () => {
    if (current === count) return null;

    return <CarouselNext variant="fill" className={classes["next-btn"]} />;
  };

  return (
    <section className={cn(classes["root"], className)}>
      <div className={classes["head-container"]}>
        <h2 className="mb-3">Posts</h2>

        {renderEditAction()}
      </div>

      <div>
        <Carousel setApi={setApi} className="relative">
          <CarouselContent>{renderRecentPosts()}</CarouselContent>

          {renderBackBtn()}

          {renderNextBtn()}
        </Carousel>
      </div>

      {renderAddPostBtn()}
    </section>
  );
};

export default PostsSection;
