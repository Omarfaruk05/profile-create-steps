const VerifyEmail = () => {
  return (
    <div className="max-w-3xl mx-auto p-2 py-24 text-center space-y-5">
      <h1 className="text-5xl font-bold">Please verify your email...</h1>
      <div className="bg-gray-200 h-32 w-32 mx-auto">{/* mail image  */}</div>
      <p className="text-gray-400">{`Please verify your email address. We've sent a confirmation email to:`}</p>
      <p className="font-semibold my-5">omarfaruk149518@gmail.com</p>
      <p className="text-gray-400">{`Click the confirmation link in that email to begin useing Dribble.`}</p>
      <p className="text-gray-400 my-3">
        <span>{`Didn't recive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can`}</span>{" "}
        <span className="text-pink-600 font-semibold">
          resend the confirmation email.
        </span>
      </p>
      <p>
        <span>Wrong email address?</span>{" "}
        <span className="text-pink-600 font-semibold">Change it.</span>
      </p>
    </div>
  );
};

export default VerifyEmail;
