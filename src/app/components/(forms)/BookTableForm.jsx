const BookTableForm = () => {
  return (
    <form>
      <label for="fname">First name:</label>
      <input placeholder="Your Name" type="text" id="fname" name="fname"></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default BookTableForm;
