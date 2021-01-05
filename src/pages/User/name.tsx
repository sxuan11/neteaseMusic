import React from 'react';
import { IndexModelState, ConnectRC, Loading, connect } from 'umi';
interface PageProps {
  index: IndexModelState;
  loading: boolean;
}
const IndexPage: ConnectRC<PageProps> = ({ index, dispatch }) => {
  const { name } = index;
  const change = () => {
    dispatch({ type: 'index/save', payload: 'nihao' });
  };
  return (
    <div>
      Hello {name}
      <button onClick={change}>change</button>
    </div>
  );
};

export default connect(
  ({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
    index,
    loading: loading.models.index,
  }),
)(IndexPage);
