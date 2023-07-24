// import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta title="Options Hub" description="Options trading community" />
      }
    >
      <h2 className="text-2xl font-bold">Options Hub</h2>
    </Main>
  );
};

export default Index;
