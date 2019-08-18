import React from 'react';
import PoopIcon from 'mdi-material-ui/EmoticonPoop';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '../src/components/Link';
import Button from '../src/components/Button';
import { GridContainer, GridItem } from '../src/components/Grid';

interface OwnProps {
  statusCode: number;
}

interface InitialProps {
  res: OwnProps;
  err: OwnProps;
}

type Props = OwnProps;

class Error extends React.Component<Props> {
  static getInitialProps({ res, err }: InitialProps) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <div style={{ textAlign: 'center', height: '85vh' }}>
        <Container style={{ height: '100%' }}>
          <GridContainer justify="center" alignItems="center" style={{ height: '100%' }}>
            <GridItem xs={12} sm={12} md={8}>
              <PoopIcon style={{ width: 80, height: 80, fill: '#1f2e44' }}/>
              <Typography variant="h5" gutterBottom>
                {this.props.statusCode
                  ? `${this.props.statusCode} | Page not found`
                  : 'An error occurred on client'}
              </Typography>
              <Button color="primary" round>
                <Link color="inherit" href="/" style={{ textDecoration: 'none' }}>
                  <strong>Go back to Homepage</strong>
                </Link>
              </Button>
            </GridItem> 
          </GridContainer>
        </Container>
      </div>
    );
  }
}

export default Error;