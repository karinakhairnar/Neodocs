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
  const [a1, setT1] = useState(false);
  const [a2, setT2] = useState(false);
  const [a3, setT3] = useState(false);
  const [a4, setT4] = useState(false);
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

  //first
  const trueAll1 = (status) => {
    setS1(status);
    setS2(status);
    setS3(status);
    setS4(status);
  };
  //second
  const trueAll2 = (status) => {
    setK1(status);
    setK2(status);
    setK3(status);
    setK4(status);
  };
  //third
  const trueAll3 = (status) => {
    setT1(status);
    setT2(status);
    setT3(status);
    setT4(status);
  };
  //fourth
  const trueAll4 = (status) => {
    setL1(status);
    setL2(status);
    setL3(status);
    setL4(status);
  };
  //five
  const trueAll5 = (status) => {
    setM1(status);
    setM2(status);
    setM3(status);
    setM4(status);
  };

  // console.log(t1);
  return (
    <div id='main'>
      <div>
        <h4>Select Teacher's And Students Here</h4>
        <div id='teacher'>
          {/* First Teacher */}
          <div className='teach'>
            <ul>
              <input
                type='checkbox'
                id='t1'
                name='t1'
                onChange={(e) => trueAll1(e.target.checked)}
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
          <div className='teach'>
            <ul>
              <input
                type='checkbox'
                id='t2'
                name='t2'
                onChange={(e) => trueAll2(e.target.checked)}
                checked={k1 && k2 && k3 && k4 ? true : false}
              />
              <label htmlFor='t2'>Teacher-2</label>

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
          <div className='teach'>
            <ul>
              <input
                type='checkbox'
                id='t3'
                name='t3'
                onChange={(e) => trueAll3(e.target.checked)}
                checked={a1 && a2 && a3 && a4 ? true : false}
              />
              <label htmlFor='t3'>Teacher-3</label>
              {/* Students of second teacher */}
              <ul>
                <input
                  type='checkbox'
                  id='a1'
                  name='a1'
                  onChange={(e) => setT1(e.target.checked)}
                  checked={a1 ? true : false}
                />
                <label htmlFor='a1'>Student-1</label>
              </ul>
              <ul>
                <input
                  type='checkbox'
                  id='a2'
                  name='a2'
                  onChange={(e) => setT2(e.target.checked)}
                  checked={a2 ? true : false}
                />
                <label htmlFor='a2'>Student-2</label>
              </ul>
              <ul>
                <input
                  type='checkbox'
                  id='a3'
                  name='a3'
                  onChange={(e) => setT3(e.target.checked)}
                  checked={a3 ? true : false}
                />
                <label htmlFor='a3'>Student-3</label>
              </ul>
              <ul>
                <input
                  type='checkbox'
                  id='a4'
                  name='a4'
                  onChange={(e) => setT4(e.target.checked)}
                  checked={a4 ? true : false}
                />
                <label htmlFor='a4'>Student-4</label>
              </ul>
            </ul>
          </div>
          {/* fourth Teacher */}
          <div className='teach'>
            <ul>
              <input
                type='checkbox'
                id='t4'
                name='t4'
                onChange={(e) => trueAll4(e.target.checked)}
                checked={l1 && l2 && l3 && l4 ? true : false}
              />
              <label htmlFor='t4'>Teacher-4</label>
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
          {/* five Teacher */}
          <div className='teach'>
            <ul>
              <input
                type='checkbox'
                id='t5'
                name='t5'
                onChange={(e) => trueAll5(e.target.checked)}
                checked={m1 && m2 && m3 && m4 ? true : false}
              />
              <label htmlFor='t5'>Teacher-5</label>
              {/* Students of second teacher */}
              <ul>
                <input
                  type='checkbox'
                  id='m1'
                  name='m1'
                  onChange={(e) => setM1(e.target.checked)}
                  checked={m1 ? true : false}
                />
                <label htmlFor='m1'>Student-1</label>
              </ul>
              <ul>
                <input
                  type='checkbox'
                  id='m2'
                  name='m2'
                  onChange={(e) => setM2(e.target.checked)}
                  checked={m2 ? true : false}
                />
                <label htmlFor='m2'>Student-2</label>
              </ul>
              <ul>
                <input
                  type='checkbox'
                  id='m3'
                  name='m3'
                  onChange={(e) => setM3(e.target.checked)}
                  checked={m3 ? true : false}
                />
                <label htmlFor='m3'>Student-3</label>
              </ul>
              <ul>
                <input
                  type='checkbox'
                  id='m4'
                  name='m4'
                  onChange={(e) => setM4(e.target.checked)}
                  checked={m4 ? true : false}
                />
                <label htmlFor='m4'>Student-4</label>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h4>View selected Teacher's And Students</h4>
        <div id='student'>
          {/* First */}
          <div>
            {s1 && s2 && s3 && s4 ? (
              <div className='teach'>
                <ul>
                  Teacher - 1
                  <ul>Student - 1</ul>
                  <ul>Student - 2</ul>
                  <ul>Student - 3</ul>
                  <ul>Student - 4</ul>
                </ul>
              </div>
            ) : (
              ''
            )}
          </div>
          {/* second */}
          <div>
            {k1 && k2 && k3 && k4 ? (
              <div className='teach'>
                <ul>
                  Teacher - 2<ul>Student - 1</ul>
                  <ul>Student - 2</ul>
                  <ul>Student - 3</ul>
                  <ul>Student - 4</ul>
                </ul>
              </div>
            ) : (
              ''
            )}
          </div>
          {/* third */}
          <div>
            {a1 && a2 && a3 && a4 ? (
              <div className='teach'>
                <ul>
                  Teacher - 3<ul>Student - 1</ul>
                  <ul>Student - 2</ul>
                  <ul>Student - 3</ul>
                  <ul>Student - 4</ul>
                </ul>
              </div>
            ) : (
              ''
            )}
          </div>
          {/* Forth */}
          <div>
            {l1 && l2 && l3 && l4 ? (
              <div className='teach'>
                <ul>
                  Teacher - 4<ul>Student - 1</ul>
                  <ul>Student - 2</ul>
                  <ul>Student - 3</ul>
                  <ul>Student - 4</ul>
                </ul>
              </div>
            ) : (
              ''
            )}
          </div>
          {/* five */}
          <div>
            {m1 && m2 && m3 && m4 ? (
              <div className='teach'>
                <ul>
                  Teacher - 5<ul>Student - 1</ul>
                  <ul>Student - 2</ul>
                  <ul>Student - 3</ul>
                  <ul>Student - 4</ul>
                </ul>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkboxes;
