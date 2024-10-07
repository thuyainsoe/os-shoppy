const SvgIcon = ({ svg }: any) => {
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
};

export default SvgIcon;
