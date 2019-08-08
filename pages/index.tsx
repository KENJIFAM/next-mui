import { NextPage } from 'next';

const backgroundColor = '#eee'

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <>
    <h1>Hello world! - user agent: {userAgent}</h1>
    <div className='hello'>
      <p>Hello World</p>
      <style jsx>{`
        $color: red;
        .hello {
          background-color: ${backgroundColor};
          padding: 100px;
          text-align: center;
          transition: 100ms ease-in background;
          &:hover {
            color: $color;
          }
          @media only screen and (max-width: 480px) {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  </>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;