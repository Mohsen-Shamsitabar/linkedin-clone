import { Button } from "@/components/ui";

const Articles = () => {
  return (
    <div className="container">
      <section>
        <h2 className="text-3xl">Learn more about Collaborative Articles</h2>

        <p>
          We’re unlocking community knowledge in an all new way. It starts with
          an article on a professional topic or skill, written with the help of
          AI — but it’s not complete without insights and advice from people
          with real-life experiences. We invited experts to contribute.
          <span> Learn more</span>
        </p>
      </section>

      <div>
        <Button variant="outline" color="primary">
          Explore more
        </Button>
      </div>

      <div>
        <article></article>
      </div>
    </div>
  );
};

export default Articles;
