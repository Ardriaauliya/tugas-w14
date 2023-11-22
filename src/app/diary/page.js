"use client";

import "@styles/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Diary() {
  const [judul, setJudul] = useState([]);
  const [isiDiary, setIsiDiary] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const endpointAPI = "https://6555c48784b36e3a431e49a6.mockapi.io/diaryku";
  useEffect(() => {
    axios.get(endpointAPI)
      .then((res) => {
        const data = res.data;

        // ambil judul
        const judul = data.map((item) => item.judul);
        setJudul(judul);

        // ambil isi_diary
        const isi_diary = data.map((item) => item.isi_diary);
        setIsiDiary(isi_diary);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
    }, []);
  
    return (
      <div>
        {isLoading ? (
          "Loading..."
        ) : judul.length > 0 ? (
          <ul>
            {judul.map((item, idx) => (
              <li key={idx}>
                <div className="diary-container">
                  <h1>{judul[idx]}</h1>
                  <p className="p-diary">{isiDiary[idx]}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          "API not loading"
        )}
      </div>
    );
  }
