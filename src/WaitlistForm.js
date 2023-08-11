import React, { useState ,useEffect} from 'react';
import './WaitlistForm.css';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [selection, setSelection] = useState('Company');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any necessary validation here before showing the toast.
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      // Automatically hide the toast after 3 seconds
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      // Clean up the timer when the component unmounts or when showToast changes
      return () => {
        clearTimeout(timer);
      };
    }
  }, [showToast]);

  return (
    <div className="waitlist-form-container">
      <form onSubmit={handleSubmit} className="waitlist-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select value={selection} onChange={(e) => setSelection(e.target.value)}>
          <option value="Company">Company</option>
          <option value="Tester">Tester</option>
        </select>
        <button type="submit">Join Waitlist</button>
      </form>
      {showToast && (
        <div className="toast">Thank you for joining our waitlist!</div>
      )}
    </div>
  );
};

export default WaitlistForm;
