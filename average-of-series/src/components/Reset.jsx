const Reset = ({ setSeries }) => {
  return (
    <section>
      <form
        onSubmit={() => {
          setSeries([]);
        }}
      >
        <button type="Submit">Reset</button>
      </form>
    </section>
  );
};

export default Reset;
