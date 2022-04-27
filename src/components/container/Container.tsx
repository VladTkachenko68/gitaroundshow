import "./container.css";

const Container = ({ children, ...rest }: any) => {
  return (
    <div className="section__padding" {...rest}>
      {children}
    </div>
  );
};

export default Container;
