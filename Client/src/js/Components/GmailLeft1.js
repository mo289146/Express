var React=require("react");

var GmailLeft1= React.createClass({
  handleLabelId: function()
  {
    this.props.submitLabelId({lableId:this.props.data.id});
  },
  render: function() {

    return (
      <tr>
      <td><a onClick={this.handleLabelId} className="btn btn-primary">{this.props.data.name}</a></td>
      </tr>
    );
  }
});
module.exports=GmailLeft1;
