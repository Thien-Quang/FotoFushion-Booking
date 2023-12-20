import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Alert, Badge, Calendar, Col, Modal, Row, Timeline } from 'antd';
import Temp from '../../utils/temp';

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

const CalendarList = 
[
    {
      "date": "2023-08-08",
      "events": [
        { "time": "10:30 - 2023-08-08", 'type': 'warning', "content": "This is warning event." },
        { "time": "12:30 - 2023-08-08",  'type': 'warning',  "content": "This is usual event." }
      ]
    },
    {
      "date": "2023-08-11",
      "events": [
        { "time": "12:30 - 2023-08-08", 'type': 'warning', "content": "This is warning event." },
        { "time": "14:30 - 2023-01-09",  'type': 'error',"content": "This is usual event." },
        { "time": "16:30 - 2023-01-09",  'type': 'success',"content": "This is error event." }
      ]
    },
    {
      "date": "2023-08-15",
      "events": [
        { "time": "10:30 - 2023-01-09",  'type': 'warning', "content": "This is warning event" },
      ]
    }
  ]
  

export default function CalendarContainer() {
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
    const resp = CalendarList;
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
    <div class='' style={{ padding: '5% 10% 5% 10%' }}>
      <h1 class='py-20 text-6xl  text-black' >Lịch làm việc</h1>
      <div class="w-8 h-1 mt-5 bg-transparent border-b-2 border-btnprimary"></div>
      <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      <Calendar mode="month" cellRender={cellRender} value={value} onSelect={onSelect} onPanelChange={onPanelChange} />;

      <Modal
        title={`${value?.format('YYYY-MM-DD')} `}
        centered
        open={open}
        width={300}
        onCancel={() => setOpen(false)}
        footer={[]}
      >
        <Row class='w-full flex gap-5' style={{ marginTop: 40 }}>
          <h1 class='text-xl font-bold '> Lịch trình trong ngày </h1>
          <div class='my-5'>
            <Timeline
              items={eventCaledarForDate ?? []}
            />
          </div>
        </Row>
      </Modal>
    </div >
  );
}
