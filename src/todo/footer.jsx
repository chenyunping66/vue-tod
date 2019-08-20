import "../assets/style/footer.styl";
export default {
  data() {
    return {
      author: "yunping"
    };
  },
  render() {
    return (
      <div id="footer">
        <span>Written by chen {this.author}</span>
      </div>
    );
  }
};
