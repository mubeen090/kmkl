import Image from "next/image";
import styles from "./CourseCard.module.css";
import Link from "next/link";
import lessons from "../../../../public/assets/courseCard/lessons.png";
import level from "../../../../public/assets/courseCard/level.png";
import rating4 from "../../../../public/assets/courseCard/rating4.png";
import students from "../../../../public/assets/courseCard/students.png";

const CourseCard = ({ slug }) => {
  return (
    <>
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src="/assets/courseCard/ai.png"
            width={340}
            height={240}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn Artificial Intelligence</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessons} />
            Lesson: 150+
          </div>
          <div className={styles.stats}>
            <Image src={students} />
            projects : 4 mini,4 major 
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            Baic to advance level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4} />
        </div>
      </div>

      {/* Repeat the above code for other course cards */}
      
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src="/assets/courseCard/ml.png"
            width={340}
            height={240}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn Machine Learning</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessons} />
            Lesson: 120
          </div>
          <div className={styles.stats}>
            <Image src={students} />
            projects: 3 mini ,4 major 
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            Beginner to advance level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4} />
        </div>
      </div>

      {/* Repeat the above code for other course cards */}
      
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src="/assets/courseCard/cybersecurity.png"
            width={340}
            height={240}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn Cyber Security</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessons} />
            Lesson: 120+
          </div>
          <div className={styles.stats}>
            <Image src={students} />
            projects: 5 mini ,3 major
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            basic to advance level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4} />
        </div>
      </div>

      {/* Repeat the above code for other course cards */}
      
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src="/assets/courseCard/devops.png"
            width={340}
            height={240}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn DevOps</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessons} />
            Lesson: 140+
          </div>
          <div className={styles.stats}>
            <Image src={students} />
            projects : 3mini ,3 major 
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            Basic to Advanced
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4} />
        </div>
      </div>

      {/* Repeat the above code for other course cards */}
      
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src="/assets/courseCard/oracle.png"
            width={340}
            height={240}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn Oracle</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessons} />
            Lesson: 1010+
          </div>
          <div className={styles.stats}>
            <Image src={students} />
            projects : 4 major projects 
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            basic to advance level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4} />
        </div>
      </div>

      {/* Repeat the above code for other course cards */}
      
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src="/assets/courseCard/aws.png"
            width={340}
            height={240}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn AWS</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessons} />
            Lesson: 180
          </div>
          <div className={styles.stats}>
            <Image src={students} />
            projects : 4 mini,4 major 
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            Beginner to advance level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4} />
        </div>
      </div>

      {/* Repeat the above code for other course cards */}
      
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src="/assets/courseCard/java.png"
            width={340}
            height={240}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Learn Java</h1>
        <div className={styles.stats_container}>
          <div className={styles.stats}>
            <Image src={lessons} />
            Lesson: 190
          </div>
          <div className={styles.stats}>
            <Image src={students} />
            projects : 4 mini ,4 major
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            Basic to advance level 
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {">"}</button>
          </Link>
          <Image src={rating4} />
        </div>
      </div>
    </>
  );
};

export default CourseCard;