import React, { useEffect, useState } from "react";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { insertAccount } from "../redux/actions/accountAction";
import { setError } from "../redux/actions/commonAction";
import "./Register.css";
export default function Register() {
  const [form] = Form.useForm();
  const yourDefaultValue = 3;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const err = useSelector((state) => state.commonReducer.error);
  useEffect(() => {
    if (err) {
      dispatch(setError(""));
      message.success(err);
    }
  }, [err]);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const data = {
      username: values.username,
      password: values.password,
      fullname: values.fullname,
      date: values.date,
      adress: values.adress,
      phone_number: values.phone_number,
      role: {
        id: values.role_id,
      },
    };
    dispatch(insertAccount(data, navigate));
  };
  return (
    <div className="register-page">
      <div className="register-form-container">
        <h1 className="title"> Đăng ký</h1>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên đăng nhập",
              },
              {
                min: 4,
                message: "Tên đăng nhập cần ít nhất 4 ký tự",
              },
            ]}
          >
            <div className="input-box">
              <Input type="text" placeholder="Tên đăng nhập" required />
            </div>
          </Form.Item>

          <Form.Item
            name="password"
            tooltip="Hãy nhập mật khẩu dễ nhớ"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
              {
                min: 4,
                message: "Mật khẩu cần ít nhất 4 ký tự",
              },
            ]}
            // hasFeedback
          >
            <div className="input-box">
              <Input type="password" placeholder="Mật Khẩu" required />
            </div>
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            // hasFeedback
            rules={[
              {
                required: true,
                message: "Vui lòng nhập lại mật khẩu!",
              },
              {
                min: 4,
                message: "Mật khẩu cần ít nhất 4 ký tự",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu nhập lại của bạn nhập không khớp!")
                  );
                },
              }),
            ]}
          >
            <div className="input-box">
              <Input type="password" placeholder="Nhập lại mật khẩu" required />
            </div>
          </Form.Item>

          <Form.Item
            name="fullname"
            tooltip="Hãy nhập họ và tên"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ và tên",
                whitespace: true,
              },
            ]}
          >
            <div className="input-box">
              <Input type="text" placeholder="Họ và tên" required />
            </div>
          </Form.Item>

          <Form.Item
            name="date"
            rules={[
              {
                required: true,

                message: "Vui lòng nhập số",
              },
              // {
              //   type: "number",
              //   min: 0,
              //   message: "Tuổi phải lớn hơn 0",
              // },
              {
                required: true,
                message: "Vui lòng nhập tuổi",
              },
            ]}
          >
            <div className="input-box">
              <Input
                type="number"
                min="1"
                max="100"
                placeholder="Số tuổi"
                required
              />
            </div>
          </Form.Item>

          <Form.Item
            name="adress"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập địa chỉ!",
              },
            ]}
          >
            <div className="input-box">
              <Input type="text" placeholder="Địa chỉ" required />
            </div>
          </Form.Item>

          <Form.Item
            name="phone_number"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại!",
              },
              {
                pattern: /^[0-9]+$/,
                message: "Vui lòng chỉ nhập số!",
              },
            ]}
          >
            <div className="input-box">
              <Input type="tel" placeholder="Số điện thoại" />
            </div>
          </Form.Item>

          <Form.Item
            name="role_id"
            style={{ display: "none" }}
            initialValue={yourDefaultValue}
          >
            <InputNumber />
          </Form.Item>
          <button type="submit">Đăng ký</button>
          <div className="login-link">
            <p className="dn">
              Đã có tài khoản ? <a href="/users/login"> Đăng nhập</a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
