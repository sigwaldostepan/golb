import HeroContent from '../components/HeroContent';
import { useLocation } from 'react-router-dom';
import useFetchPosts from '../features/posts/useFetchPosts';
import { useEffect } from 'react';
import convertTags from '../lib/convertTags';
import { HeroContentEmptyPlaceholder } from '../components/HeroContent/empty-placeholder';
import { HeroContentSkeleton } from '../components/HeroContent/skeleton';

const Home = () => {
  const tags = useLocation().search;

  const { data: posts } = useFetchPosts(convertTags(tags));

  const renderPosts = () => {
    // Loading state
    if (!posts) {
      return Array(3)
        .fill(0)
        .map((_, index) => <HeroContentSkeleton key={index} />);
    }

    // No posts found
    if (!posts.data.payload.response || posts.data.payload.response.length === 0) {
      return <HeroContentEmptyPlaceholder />;
    }

    // Render posts
    return posts.data.payload.response.map((data) => (
      <HeroContent
        key={data.id}
        link={`/post/${data.id}`}
        img={data.img}
        title={data.title}
        description={data.desc?.substring(0, 150) + '...'} // Add description preview
      />
    ));
  };

  useEffect(() => {
    const title = convertTags(tags);
    document.title = `Glob - ${title} Articles`;
  }, [tags]);

  return (
    <>
      <main>
        <div className='min-h-screen'>
          <div className='container mx-auto min-h-screen flex flex-col items-center gap-12 justify-center'>
            {renderPosts()}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
