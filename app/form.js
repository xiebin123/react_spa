import React from 'react';

import { Form, Input, Select, Checkbox, DatePicker, Col, Radio, Button, Modal, message } from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group


class Forms extends React.Component{
  constructor(props){
    super(props);
    this.state={
        visible:false
    }
  }

    // 选择select
    handleSelectChange(value){
        console.log(`selected ${value}`)
    }

    // 提交表单
    handleSubmit(e){
        e.preventDefault()
        console.log('收到表单值：', this.props.form.getFieldsValue())

        this.props.form.resetFields()
    }


    // 显示弹框
    showModal(){
        this.setState({ visible: true })
    }


    // 隐藏弹框
    hideModal(){
        this.setState({ visible: false })
    }

    render(){   
        const { getFieldProps } = this.props.form

        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 6 }
        }

        const success = function () {
            message.success('操作成功!');
        }

        return(
        <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
            <FormItem 
                     id="control-input"
                     label="输入框"
                     style={{color:"#ffffff"}}
                     {...formItemLayout}
                     required
            >
                <Input id="control-input" placeholder="Please enter..." {...getFieldProps('userName')}/>
            </FormItem>

            <FormItem 
                   label="日期选择框"
                   labelCol={{span:3}}
                   style={{color:"#ffffff"}}
                   required
             >
                <Col span="2">
                   <FormItem>
                       <DatePicker {...getFieldProps('startDate')} /> 
                   </FormItem>
                </Col>
                <Col span="1">
                    <p className="ant-form-split">-</p>
                </Col>
                <Col span="2">
                   <FormItem>
                      <DatePicker {...getFieldProps('endDate')} />
                   </FormItem>
                </Col>
            </FormItem>
               
            <FormItem
               id="control-textarea"
               label="文本域"
               style={{color:"#ffffff"}}
               {...formItemLayout}
            >
               <Input type="textarea" id="control-area" row="3" {...getFieldProps('content')} />                           
            </FormItem>

            <FormItem
              id="select"
              label="选择器"
              style={{color:"#ffffff"}}
              {...formItemLayout}
            >
                <Select id="select" size="large" defaultValue="lucy" style={{width:200}} onChange={this.handleSelectChange.bind(this)}
                 {...getFieldProps('people')}>
                    <Option value="jack">jack</Option>
                    <Option value="lucy">lucy</Option>
                    <Option value="disabled" disabled>disabled</Option>
                    <Option value="jone">jone</Option>
                </Select>
            </FormItem>

            <FormItem
               label="Chcekbox 多选框"
               {...formItemLayout}
               style={{color:"#ffffff"}}       
            >
               <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem1')}>选项一</Checkbox>
               <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem2')}>选项二</Checkbox>
               <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem3')}>选项三</Checkbox>               
            </FormItem>

            <FormItem
                label="Radio 单选框"
                style={{color:"#ffffff"}}
                {...formItemLayout}
            >
             <RadioGroup defaultValue="b" {...getFieldProps('radioItem')}> 
                   <Radio value="a">A</Radio>
                   <Radio value="b">B</Radio>
                   <Radio value="c">C</Radio>
                   <Radio value="d">D</Radio>
             </RadioGroup>
            </FormItem>

            <FormItem wrapperCol={{span:6,offset:3}} style={{marginTop:24}}>
                  <Button type="primary" htmlType="submit" onClick={success}>提交</Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button type="primary" onClick={this.showModal.bind(this)}>点击有惊喜</Button>
            </FormItem>
            <Modal
                title="对话框标题"
                visible={this.state.visible}
                onOk={this.hideModal.bind(this)}
                onCancel={this.hideModal.bind(this)}
            >
               这是一个modal   
            </Modal>
        </Form>
     
        )
    }
}


Forms=Form.create()(Forms);

export default Forms;