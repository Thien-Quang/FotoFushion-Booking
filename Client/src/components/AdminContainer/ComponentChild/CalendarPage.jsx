import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Alert, Typography, Badge, Calendar, Col, Modal, Radio, Row, Space, Timeline, Button } from 'antd';
import Temp from '../../../utils/temp';
const { Text } = Typography;
const getListData = (value, calendar) => {
  const selectedDate = value.format('YYYY-MM-DD');
  const selectedDateEntry = calendar?.find(entry => entry.date === selectedDate);
  const newList = selectedDateEntry
    ? selectedDateEntry.events.map(event => ({
      type: event.type, // Replace 'type' with the actual property name in your event
      content: event.content,
    }))
    : []
  return newList;

};

export default function CalendarManager() {
  const [calendarForMonth, setCalendarForMonth] = useState();
  const [calendarForDate, setCalendarForDate] = useState();
  const [eventCaledarForDate, setEventCaledarForDate] = useState();
  const [eventSelect, setEventSelect] = useState();
  const [value, setValue] = useState(() => dayjs('2023-08-25'));
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2023-08-25'));
  const [open, setOpen] = useState();

  useEffect(() => {
    // gọi api lịch cho tháng dựa trên selectedValue?.$M 
    //  fetchCalendarMonth(selectedValue?.$M)
    const resp = Temp?.CalendarList;
    setCalendarForMonth(resp ?? []);
  }, [selectedValue])

  useEffect(() => {
    // gọi api lịch cho 1 ngày dựa trên value?.$M
    //  fetchCalendarMonth(selectedValue?.$M)
    const resp = Temp?.calenderListInADay;
    setCalendarForDate(resp ?? []);
  }, [value])

  useEffect(() => {
    const newListVennt = calendarForDate?.map((item) => ({
      children: (
        <div key={item?.time} class='cursor-pointer' onClick={() => handleChangeEvent(item)}>
          {`${item?.time} - ${item?.type}`}
        </div>
      )
    }));
    setEventCaledarForDate(newListVennt)
  }, [calendarForDate])

  function handleChangeEvent(value) {
    setEventSelect(value)
  }

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
    setOpen(true);
  };

  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  const dateCellRender = (value) => {
    const listData = getListData(value, calendarForMonth);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    return info.originNode;
  };



  return (
    <div class='bg-white w-full p-3  rounded-lg '>
      <h1 class='py-2 text-4xl bold  text-black' >Lịch làm việc</h1>
      <div class="w-8 h-1 mt-5 bg-transparent border-b-2 border-btnprimary"></div>
      <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      <Calendar mode="month" cellRender={cellRender} value={value} onSelect={onSelect} onPanelChange={onPanelChange} />;


      <Modal
        title={`${value?.format('YYYY-MM-DD')} `}
        centered
        open={open}
        width={1000}
        onCancel={() => setOpen(false)}
        footer={[]}
      >
        <Row class='w-full flex gap-5' style={{ marginTop: 40 }}>
          <Col span={7}>
            <h1 class='text-xl font-bold '> Lịch trình trong ngày </h1>
            <div class='my-5'>
              <Timeline
                items={eventCaledarForDate ?? []}
              />
            </div>

          </Col>
          <Col span={16}>
            <h1 class='text-xl font-bold'>  Nội dung cụ thể</h1>
            <div class='p-2 flex flex-row justify-between'>
              <div class='flex'>
                <h2 class='font-bold'>{`Mã booking: ${eventSelect?.id}`}</h2>
              </div>
              <div class='flex'>
                <h2 class='font-bold'>{`Date booking: ${eventSelect?.date}`}</h2>
              </div>
            </div>

            <div class='p-2 flex flex-row justify-between'>
              <div class='flex'>
                <h2 class='font-bold'>{`Thời gian: ${eventSelect?.time}`}</h2>
              </div>
              <div class='flex'>
                <h2 class='font-bold'>{`Thể loại: ${eventSelect?.type}`}</h2>
              </div>
            </div>

            <div class='p-2 flex flex-row justify-between'>
              <div class='flex'>
                <h2 class='font-bold'>{`Số điện thoại: ${eventSelect?.phone}`}</h2>
              </div>
              <div class='flex'>
                <h2 class='font-bold'>{`Email: ${eventSelect?.email}`}</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>
    </div >
  );
}
