
import { useState, FormEvent } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send the data to your server
      // This is a mock implementation that simulates a submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes we'll just simulate a successful submission
      console.log("Form submitted:", formData);
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus('success');
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-design-dark/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-design-teal focus:border-transparent text-white placeholder-gray-500 transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-design-dark/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-design-teal focus:border-transparent text-white placeholder-gray-500 transition-all"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-design-dark/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-design-teal focus:border-transparent text-white placeholder-gray-500 transition-all resize-none"
            placeholder="How can I help you?"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            isSubmitting 
              ? "bg-gray-600 cursor-not-allowed" 
              : "bg-design-purple hover:bg-design-purple/90"
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin mr-2" size={18} />
              Sending...
            </>
          ) : submitStatus === 'success' ? (
            <>
              <CheckCircle className="mr-2" size={18} />
              Message Sent!
            </>
          ) : submitStatus === 'error' ? (
            <>
              <AlertCircle className="mr-2" size={18} />
              Failed to Send
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
