const Message = ({ error, message, success }) => {
  return error ? (
    <p className="text-red-400 text-center font-bold bg-red-500/10 p-3 rounded-lg border border-red-500/20 animate-pulse transition-all duration-100">
      {error}
    </p>
  ) : success ? (message ? 
    <p className="text-green-500 text-center font-bold bg-green-500/10 p-3 rounded-lg border border-green-500/20 animate-pulse transition-all duration-100">
      {message}
    </p>
    : null
  ) : null;
};

export default Message;
