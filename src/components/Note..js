// Tao form nhập liệu
<div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}> First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                    placeholder="First Name" 
                                    value={this.state.firstname}>
                                    </Input>
                                </Col>
                            </FormGroup>
                         
                            <FormGroup row>
                                <Col md={{size: 6, offset : 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                            name="agree"
                                            checked={this.state.agree}
                                            />{' '}
                                            <strong>May be contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset:1}}>
                                    <Input type="select" name="contactType"
                                    value={this.state.contactType}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Label</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                    row="12" value={this.state.message}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send FeedBack
                                    </Button>
                                </Col>
                            </FormGroup>

                        </Form>
                    </div>
                </div>

// xử lí sự kiện
// event.target : lấy tất cả các thuộc tính của 1 thành phần , ví dụ như name, id  , value ,...
handleInputChange(event){
    console.log(event.target)
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
        [name] :value
    });
}

// khi có bất kì sự thay đổi nào thì mọi biến , giá trị được khai báo trong phần render đều sẽ được cập nhật lại giá trị đó
// Khi sử dụng formgroup thì thường đi kèm với FormFeedBack để kiểm tra ràng buộc về dữ liệu được nhập vào 
const errors =  this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email); 


                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                    placeholder="First Name" 
                                    value={this.state.firstname}
                                    valid={errors.firstname===''} // quan trong
                                    invalid = {errors.firstname !== ''}    // quan trong
                                    onBlur={this.handleBlur('firstname')}   // khi nháy chuột ra khỏi trường này thì hàm được gọi sẽ chạy
                                    onChange={this.handleInputChange}>
                                    </Input>
                                    <FormFeedback>{errors.firstname}</FormFeedback> // dòng này để hiển thị thông báo lỗi dưới trường sai
                                </Col>
    // class="ml-auto" sẽ chuyển thành phần đó sang bên phải
    //ref will get you a reference to the Input component. Use innerRef to get a reference to the underlying input.