import {
  FC,
  useEffect,
  useState,
} from 'react';

interface AsyncLoadProps {
  load: () => Promise<{ default: any }>;
}
const AsyncLoad: FC<AsyncLoadProps> = (props) => {
  
  const { load } = props;
  const [RemoteComponent, setRemoteComponent] = useState<{ default: any }>();
  
  useEffect(() => {
    load().then((res) => {
      setRemoteComponent(res);
    });
  }, [load]);

  if (!RemoteComponent) {
    return (
      <>
        <span>loading...</span>
      </>
    );
  }

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <RemoteComponent.default/>
  );
  
};

export { AsyncLoad };
