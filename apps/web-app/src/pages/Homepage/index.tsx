import { Hero, PageContainer } from '@habit-dev/ui';

const Homepage = () => {
  return (
    <PageContainer>
      <Hero />
      <div
        style={{
          padding: '20px 20px 0 20px',
          backgroundColor: 'var(--primarygreen)',
          height: '100%',
          // borderRadius:'5px'
        }}
      >
        {/* <div
          style={{
            backgroundColor: 'var(--creamwhite)',
            height: '100%',
            borderRadius: '2px',
            boxShadow:
              'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
          }}
        >
          Text
        </div> */}
      </div>
    </PageContainer>
  );
};

export default Homepage;
