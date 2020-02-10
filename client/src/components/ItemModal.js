import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { addItem } from "../actions/itemActions";
import { connect } from "react-redux";

class ItemModal extends Component {
  state = {
    model: false,
    name: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };

    this.props.addItem(newItem);

    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Add toShopping List
            <ModalBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="item">
                    item
                    <Input
                      type="text"
                      name="name"
                      id="item"
                      placeholder="add shopping item"
                      onChange={this.onChange}
                    ></Input>
                    <Button color="dark" style={{ marginTop: "2rem" }} block>
                      add item
                    </Button>
                  </Label>
                </FormGroup>
              </Form>
            </ModalBody>
          </ModalHeader>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);
