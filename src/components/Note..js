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

    toggle={this.toggleModal} // sử dụng thuộc tính thì khi nhấn chuột ra ngoài form , form này sẽ ẩn , nếu không có thì nó vấn hiển thị





//validation use react-redux-form 
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
   // --> day là các giá trị đúng sai để kiểm tra xem có đúng với yêu cầu hay không

                                    Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
// cần đóng gói trong LocalForm > ROW > Control.text( model)  . thuộc tính model để ánh xa xuống phần tử tưởng ứng Errors


// tạo Form có thể dùng Form > FormGroup(Label, Col) > ... 
// Hoặc có thể sử dụng LocalForm > Row > (Label, Col(Control.text/select), Errors(tương tác thông qua thuộc tính model))
// Sử dụng uncontrolled Form để toggle thì dùng thêm Model liên kết qua thuộc tính
                        // isOpen : trạng thái hiển thị hay k?
                        // toggle : xử lí ẩn khi click chuột ra bên ngoài




// Cấu trúc redux
                    // +. Action  :: là một đối tượng , xuất hiện khi ấn 1 sự kiện