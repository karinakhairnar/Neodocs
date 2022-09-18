import React from 'react';
import { useState } from 'react';
import './ui.css';
const Checkboxes = () => {
  // const [t1, setT1] = useState(false);
  // First
  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  const [s3, setS3] = useState(false);
  const [s4, setS4] = useState(false);
  //second
  const [k1, setK1] = useState(false);
  const [k2, setK2] = useState(false);
  const [k3, setK3] = useState(false);
  const [k4, setK4] = useState(false);
  //third
  const [t1, setT1] = useState(false);
  const [t2, setT2] = useState(false);
  const [t3, setT3] = useState(false);
  const [t4, setT4] = useState(false);
  //forth
  const [l1, setL1] = useState(false);
  const [l2, setL2] = useState(false);
  const [l3, setL3] = useState(false);
  const [l4, setL4] = useState(false);
  //five
  const [m1, setM1] = useState(false);
  const [m2, setM2] = useState(false);
  const [m3, setM3] = useState(false);
  const [m4, setM4] = useState(false);

  const trueAll = (status) => {
    //first
    setS1(status);
    setS2(status);
    setS3(status);
    setS4(status);
    //second
    setK1(status);
    setK2(status);
    setK3(status);
    setK4(status);
    //third
    setT1(status);
    setT2(status);
    setT3(status);
    setT4(status);
    //fourth
    setL1(status);
    setL2(status);
    setL3(status);
    setL4(status);
    //five
    setM1(status);
    setM2(status);
    setM3(status);
    setM4(status);
  };
  // console.log(t1);
  return (
    <div id='main'>
      <div>
        {/* First Teacher */}
        <div>
          <ul>
            <input
              type='checkbox'
              id='t1'
              name='t1'
              onChange={(e) => trueAll(e.target.checked)}
              checked={s1 && s2 && s3 && s4 ? true : false}
            />
            <label htmlFor='t1'>Teacher-1</label>

            {/* Students of first teacher */}
            <ul>
              <input
                type='checkbox'
                id='s1'
                name='s1'
                onChange={(e) => setS1(e.target.checked)}
                checked={s1 ? true : false}
              />
              <label htmlFor='s1'>Student-1</label>
            </ul>
            <ul>
              <input
                type='checkbox'
                id='s2'
                name='s2'
                onChange={(e) => setS2(e.target.checked)}
                checked={s2 ? true : false}
              />
              <label htmlFor='s2'>Student-2</label>
            </ul>
            <ul>
              <input
                type='checkbox'
                id='s3'
                name='s3'
                onChange={(e) => setS3(e.target.checked)}
                checked={s3 ? true : false}
              />
              <label htmlFor='s3'>Student-3</label>
            </ul>
            <ul>
              <input
                type='checkbox'
                id='s4'
                name='s4'
                onChange={(e) => setS4(e.target.checked)}
                checked={s4 ? true : false}
              />
              <label htmlFor='s4'>Student-4</label>
            </ul>
          </ul>
        </div>
        {/* second Teacher */}
        <div>
          <ul>
            <input
              type='checkbox'
              id='k1'
              name='k1'
              onChange={(e) => trueAll(e.target.checked)}
              checked={k1 && k2 && k3 && k4 ? true : false}
            />
            <label htmlFor='k1'>Teacher-2</label>

            {/* Students of second teacher */}
            <ul>
              <input
                type='checkbox'
                id='k1'
                name='k1'
                onChange={(e) => setK1(e.target.checked)}
                checked={k1 ? true : false}
              />
              <label htmlFor='k1'>Student-1</label>
            </ul>
            <ul>
              <input
                type='checkbox'
                id='k2'
                name='k2'
                onChange={(e) => setK2(e.target.checked)}
                checked={k2 ? true : false}
              />
              <label htmlFor='k2'>Student-2</label>
            </ul>
            <ul>
              <input
                type='checkbox'
                id='k3'
                name='k3'
                onChange={(e) => setK3(e.target.checked)}
                checked={k3 ? true : false}
              />
              <label htmlFor='k3'>Student-3</label>
            </ul>
            <ul>
              <input
                type='checkbox'
                id='k4'
                name='k4'
                onChange={(e) => setK4(e.target.checked)}
                checked={k4 ? true : false}
              />
              <label htmlFor='k4'>Student-4</label>
            </ul>
          </ul>
        </div>
        {/* Third Teacher */}
        <div>
          <ul>
            <input
              type='checkbox'
              id='t1'
              name='t1'
              onChange={(e) => trueAll(e.target.checked)}
              checked={t1 && t2 && t3 && t4 ? true : false}
            />
            <label htmlFor='t1'>Teacher-3</label>
            {/* Students of second teacher */}
            <ul>
              <input
                type='checkbox'
                id='t1'
                name='t1'
                onChange={(e) => setT1(e.target.checked)}
                checked={t1 ? true : false}
              />
              <label htmlFor='t1'>Student-1</label>
            </ul>
            <ul>
              <input
                type='checkbox'
                id='t2'
                name='t2'
                onChange={(e) => setT2(e.target.checked)}
                checked={t2 ? true : false}
              />
              <label htmlFor='t2'>Student-2</label>
            </ul>
            <ul>
              <input
                type='checkbox'
                id='t3'
                name='t3'
                onChange={(e) => setT3(e.target.checked)}
                checked={t3 ? true : false}
              />
              <label htmlFor='t3'>Student-3</label>
            </ul>
            <ul>
              <input
                type='checkbox'
                id='t4'
                name='t4'
                onChange={(e) => setT4(e.target.checked)}
                checked={t4 ? true : false}
              />
              <label htmlFor='t4'>Student-4</label>
            </ul>
          </ul>
        </div>
        {/* fourth Teacher */}
        <div>
          <ul>
            <input
              type='checkbox'
              id='l1'
              name='l1'
              onChange={(e) => trueAll(e.target.checked)}
              checked={l1 && l2 && l3 && l4 ? true : false}
            />
            <label htmlFor='t1'>Teacher-4</label>
            {/* Students of second teacher */}
            <ul>
              <input
                type='checkbox'
                id='l1'
                name='l1'
                onChange={(e) => setL1(e.target.checked)}
                checked={l1 ? true : false}
              />
              <label htmlFor='l1'>Student-1</label>
            </ul>
            <ul>
              <input
                type='checkbox'
                id='l2'
                name='l2'
                onChange={(e) => setL2(e.target.checked)}
                checked={l2 ? true : false}
              />
              <label htmlFor='l2'>Student-2</label>
            </ul>
            <ul>
              <input
                type='checkbox'
                id='l3'
                name='l3'
                onChange={(e) => setL3(e.target.checked)}
                checked={l3 ? true : false}
              />
              <label htmlFor='l3'>Student-3</label>
            </ul>
            <ul>
              <input
                type='checkbox'
                id='l4'
                name='l4'
                onChange={(e) => setL4(e.target.checked)}
                checked={l4 ? true : false}
              />
              <label htmlFor='l4'>Student-4</label>
            </ul>
          </ul>
        </div>
      </div>
      <div id='student'>
        {/* First */}
        <div>
          {s1 && s2 && s3 && s4 ? (
            <div>
              <ul>
                <p>Teacher - 1</p>
                <ul>
                  <p>Student - 1</p>
                </ul>
                <ul>
                  <p>Student - 2</p>
                </ul>
                <ul>
                  <p>Student - 3</p>
                </ul>
                <ul>
                  <p>Student - 4</p>
                </ul>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
        {/* second */}
        <div>
          {k1 && k2 && k3 && k4 ? (
            <div>
              <ul>
                <p>Teacher - 2</p>
                <ul>
                  <p>Student - 1</p>
                </ul>
                <ul>
                  <p>Student - 2</p>
                </ul>
                <ul>
                  <p>Student - 3</p>
                </ul>
                <ul>
                  <p>Student - 4</p>
                </ul>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
        {/* third */}
        <div>
          {t1 && t2 && t3 && t4 ? (
            <div>
              <ul>
                <p>Teacher - 3</p>
                <ul>
                  <p>Student - 1</p>
                </ul>
                <ul>
                  <p>Student - 2</p>
                </ul>
                <ul>
                  <p>Student - 3</p>
                </ul>
                <ul>
                  <p>Student - 4</p>
                </ul>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
        {/* Forth */}
        <div>
          {l1 && l2 && l3 && l4 ? (
            <div>
              <ul>
                <p>Teacher - 4</p>
                <ul>
                  <p>Student - 1</p>
                </ul>
                <ul>
                  <p>Student - 2</p>
                </ul>
                <ul>
                  <p>Student - 3</p>
                </ul>
                <ul>
                  <p>Student - 4</p>
                </ul>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
        {/* five */}
        <div>
          {m1 && m2 && m3 && m4 ? (
            <div>
              <ul>
                <p>Teacher - 5</p>
                <ul>
                  <p>Student - 1</p>
                </ul>
                <ul>
                  <p>Student - 2</p>
                </ul>
                <ul>
                  <p>Student - 3</p>
                </ul>
                <ul>
                  <p>Student - 4</p>
                </ul>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkboxes;
