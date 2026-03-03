const InputField = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative w-full">
      {Icon ? (
        <Icon className="absolute top-1/2 left-4 -translate-y-1/2 text-blue-500 w-5 h-5" />
      ) : null}
      <input className="input-tw" {...props} />
    </div>
  );
};

export default InputField;
