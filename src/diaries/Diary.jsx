import { useEffect, useState } from "react";
const DATA_URL = `http://localhost:5000/diaries`;

const Diary = () => {
  // 데이터 베이스 주소
  //다이어리 데이터 초기화
  const initData = {
    title: "",
    date: "",
    content: "",
    mode: "",
    weather: "",
  };
  const putinitData = {
    id: "",
    title: "",
    date: "",
    content: "",
    mode: "",
    weather: "",
  };

  const [diaryList, setDiaryList] = useState([]);
  const [formData, setformData] = useState(initData);
  const [putData, setPutData] = useState(initData);

  //"GET"
  const getDiaryList = async () => {
    try {
      const res = await fetch(`${DATA_URL}`);
      const data = await res.json();
      setDiaryList(data);
    } catch (error) {
      console.log(`네트워크 에러입니다. 종류: ${error}`);
    }
  };
  useEffect(() => {
    getDiaryList();
    return () => {};
  }, []);
  //"GET" 1개만
  const getDairy = async id => {
    try {
      const res = await fetch(`${DATA_URL}/${id}`);
      const data = await res.json();
    } catch (error) {
      console.log(`네트워크 에러입니다. 종류: ${error}`);
    }
  };

  // "POST"
  const postDairy = async () => {
    try {
      const res = await fetch(`${DATA_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      getDiaryList();
    } catch (error) {
      console.log(`네트워크 오류입니다. 종류: ${error}`);
    }
  };

  //"DELETE"
  const deleteDiary = async id => {
    try {
      const res = await fetch(`${DATA_URL}/${id}`, {
        method: "DELETE",
      });
      getDiaryList();
    } catch (error) {}
  };

  //"PUT"
  const putDiary = async () => {
    const { id, title, date, content, mode, weather } = putData;
    try {
      const res = await fetch(`${DATA_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "applilcation/json" },
        body: JSON.stringify({
          title,
          date,
          content,
          mode,
          weather,
        }),
      });
      getDiaryList();
    } catch (error) {
      console.log(`네트워크 오류입니다. 종류: ${error}`);
    }
  };

  // input 내용 변경 시, forData에 반영
  const handleChange = event => {
    const { type, id, name, value } = event.target;
    console.log(
      `type: ${type}
         id:${id}
         name:${name}
         value:${value}`,
    );
    setformData({ ...formData, [name]: value });
  };

  //form태그 내 데이터를 db에 올리기
  const handleSubmit = event => {
    const { id } = event.target;
    event.preventDefault();
    postDairy(id);
  };
  // 상세보기 제출 시 put
  const handleSubmitPut = e => {
    e.preventDefault();
    putDiary();
    setPutData(putinitData);
  };

  //상세보기 눌러서 폼 태그 내용에 1개 get해오기
  const handleDetail = item => {
    setPutData({ ...item });
  };
  // 상세보기 내용 변동 시
  const handleChangePut = event => {
    const { type, id, name, value } = event.target;
    console.log(
      `type: ${type}
         id:${id}
         name:${name}
         value:${value}`,
    );
    setPutData({ ...putData, [name]: value });
    // const { name, value } = e.target;
    // setPutData({ ...putData, [name]: value });
    // console.log(putData);
  };

  return (
    <div>
      <h1>다이어리</h1>
      {/* 다이어리 작성 */}
      <div>
        <form action="" onSubmit={e => handleSubmit(e)}>
          <div>
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={event => handleChange(event)}
            />
          </div>
          <div>
            <label htmlFor="date">날짜</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={event => handleChange(event)}
            />
          </div>
          <div>
            <label htmlFor="content">내용</label>
            <textarea
              name="content"
              id="content"
              value={formData.content}
              onChange={event => handleChange(event)}
            ></textarea>
          </div>
          <div>
            <span>기분</span>
            <input
              type="radio"
              id="fun"
              name="mode"
              value="0"
              checked={formData.mode === "0"}
              onChange={event => handleChange(event)}
            />
            <label htmlFor="fun">😊</label>
            <input
              type="radio"
              id="happy"
              name="mode"
              value="1"
              checked={formData.mode === "1"}
              onChange={event => handleChange(event)}
            />
            <label htmlFor="happy">😄</label>
            <input
              type="radio"
              id="soso"
              name="mode"
              value="2"
              checked={formData.mode === "2"}
              onChange={event => handleChange(event)}
            />
            <label htmlFor="soso">😶</label>
            <input
              type="radio"
              id="angry"
              name="mode"
              value="3"
              checked={formData.mode === "3"}
              onChange={event => handleChange(event)}
            />
            <label htmlFor="angry">🤬</label>
            <input
              type="radio"
              id="sad"
              name="mode"
              value="4"
              checked={formData.mode === "4"}
              onChange={event => handleChange(event)}
            />
            <label htmlFor="sad">😥</label>
          </div>
          <div>
            <span>날씨</span>
            <input
              type="radio"
              id="sunny"
              name="weather"
              value="0"
              checked={formData.weather === "0"}
              onChange={event => handleChange(event)}
            />
            <label htmlFor="sunny">🌞</label>
            <input
              type="radio"
              id="cloud"
              name="weather"
              value="1"
              checked={formData.weather === "1"}
              onChange={event => handleChange(event)}
            />
            <label htmlFor="cloud">⛅</label>
            <input
              type="radio"
              id="rainy"
              name="weather"
              value="2"
              checked={formData.weather === "2"}
              onChange={event => handleChange(event)}
            />
            <label htmlFor="rainy">🌂</label>
            <input
              type="radio"
              id="snow"
              name="weather"
              value="3"
              checked={formData.weather === "3"}
              onChange={event => handleChange(event)}
            />
            <label htmlFor="snow">⛄</label>
          </div>
          <button type="submit">등록</button>
        </form>
      </div>
      <hr />
      {/* 다이어리 목록 */}
      <div>
        {diaryList.map(item => {
          return (
            <div key={item.id}>
              {item.id} : {item.title}
              <button
                type="button"
                onClick={() => {
                  deleteDiary(item.id);
                }}
              >
                삭제
              </button>
              <button
                type="button"
                onClick={() => {
                  getDairy(item.id);
                  handleDetail(item);
                }}
              >
                상세보기
              </button>
            </div>
          );
        })}
      </div>
      <hr />
      {/* 다이어리 상세보기 */}
      <div>
        <div>{putData.id}</div>
        <form action="" onSubmit={e => handleSubmitPut(e)}>
          <div>
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              name="title"
              value={putData.title}
              onChange={event => handleChangePut(event)}
            />
          </div>
          <div>
            <label htmlFor="date">날짜</label>
            <input
              type="date"
              id="date"
              name="date"
              value={putData.date}
              onChange={event => handleChangePut(event)}
            />
          </div>
          <div>
            <label htmlFor="content">내용</label>
            <textarea
              name="content"
              id="content"
              value={putData.content}
              onChange={event => handleChangePut(event)}
            ></textarea>
          </div>
          <div>
            <span>기분</span>
            <input
              type="radio"
              id="fun"
              name="mode"
              value="0"
              checked={putData.mode === "0"}
              onChange={event => handleChangePut(event)}
            />
            <label htmlFor="fun">😊</label>
            <input
              type="radio"
              id="happy"
              name="mode"
              value="1"
              checked={putData.mode === "1"}
              onChange={event => handleChangePut(event)}
            />
            <label htmlFor="happy">😄</label>
            <input
              type="radio"
              id="soso"
              name="mode"
              value="2"
              checked={putData.mode === "2"}
              onChange={event => handleChangePut(event)}
            />
            <label htmlFor="soso">😶</label>
            <input
              type="radio"
              id="angry"
              name="mode"
              value="3"
              checked={putData.mode === "3"}
              onChange={event => handleChangePut(event)}
            />
            <label htmlFor="angry">🤬</label>
            <input
              type="radio"
              id="sad"
              name="mode"
              value="4"
              checked={putData.mode === "4"}
              onChange={event => handleChangePut(event)}
            />
            <label htmlFor="sad">😥</label>
          </div>
          <div>
            <span>날씨</span>
            <input
              type="radio"
              id="sunny"
              name="weather"
              value="0"
              checked={putData.weather === "0"}
              onChange={event => handleChangePut(event)}
            />
            <label htmlFor="sunny">🌞</label>
            <input
              type="radio"
              id="cloud"
              name="weather"
              value="1"
              checked={putData.weather === "1"}
              onChange={event => handleChangePut(event)}
            />
            <label htmlFor="cloud">⛅</label>
            <input
              type="radio"
              id="rainy"
              name="weather"
              value="2"
              checked={putData.weather === "2"}
              onChange={event => handleChangePut(event)}
            />
            <label htmlFor="rainy">🌂</label>
            <input
              type="radio"
              id="snow"
              name="weather"
              value="3"
              checked={putData.weather === "3"}
              onChange={event => handleChangePut(event)}
            />
            <label htmlFor="snow">⛄</label>
          </div>
          <button type="submit">수정하기</button>
        </form>
      </div>
    </div>
  );
};
export default Diary;
