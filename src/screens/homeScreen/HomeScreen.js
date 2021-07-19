import React from "react";
import { useEffect } from "react";
import { Container,  Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import Video from "./../../components/video/Video";

import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideo from "../../components/skeletons/SkeletonVideo";

function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <Container>
      <CategoriesBar />

      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!loading
          ? videos.map((video) => (
              <Col lg={3} md={4}>
                <Video video={video} key={video.id} />
              </Col>
            ))
          : [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <SkeletonVideo  />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
}

export default HomeScreen;
