import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useRoute, useNavigation, RouteProp} from "@react-navigation/native";

import styles from "./styles";
import VideoListItem from "../../components/VideoListItem";
import VideoPlayer from "../../components/VideoPlayer";

import { AntDesign } from "@expo/vector-icons";
import VideoComments from "../../components/VideoComments";
import VideoComment from "../../components/VideoComment";

//Data JSON prob
import comments from '../../assets/data/comments.json'
import videos from "../../assets/data/videos.json";

type Video = {
    createdAt : string,
    duration: number,
    id: string,
    thumbnail: string,
    title: string,
    user: {
        image: string,
        name: string,
        subscribers: number
    },
    videoUrl: string,
    views: number
    tags: string,
    likes: number,
    dislikes: number
}

type RouteParams = {
  video: Video;
};

type RootParamList = {
  VideoScreen: RouteParams;
  // ... otros parámetros de ruta para otras pantallas
};

const VideoScreen = () => {

  const route = useRoute<RouteProp<RootParamList, 'VideoScreen'>>()
  const { video } = route.params
  const videoUrl = video.videoUrl
  const image = video.thumbnail

  const commentsSheetRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    const fetchComments = async () => {
      //Logica para obtener la lista de los comentarios asociadas al video.
    };

    fetchComments();

  }, []);

  const openComments = () => {
    commentsSheetRef.current?.present();
  };

  if (!video) {
    return <ActivityIndicator />;
  }

  let viewsString = video.views.toString();
  if (video.views > 1_000_000) {
    viewsString = (video.views / 1_000_000).toFixed(1) + "m";
  } else if (video.views > 1_000) {
    viewsString = (video.views / 1_000).toFixed(1) + "k";
  }

  return (
    <View style={{ backgroundColor: "#141414", flex: 1 }}>
      {/* Video Player */}
      <VideoPlayer videoURI={videoUrl} thumbnailURI={video.thumbnail} />

      <View style={{ flex: 1 }}>
        {/* Video Info */}
        <View style={styles.videoInfoContainer}>
          <Text style={styles.tags}>{video.tags}</Text>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subtitle}>
            {video.user?.name} {viewsString} {video.createdAt}
          </Text>
        </View>

        {/* Action List */}
        <View style={styles.actionListContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.actionListItem}>
              <AntDesign name="like1" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="dislike2" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="export" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={30} color="lightgrey" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>
          </ScrollView>
        </View>

        {/* User Info */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            borderColor: "#3d3d3d",
            borderTopWidth: 1,
            borderBottomWidth: 1,
          }}
        >
          <Image style={styles.avatar} source={{ uri: video.user?.image }} />

          <View style={{ marginHorizontal: 10, flex: 1 }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              {video.user?.name}
            </Text>
            <Text style={{ color: "grey", fontSize: 18 }}>
              {video.user?.subscribers} subscribers
            </Text>
          </View>

          <Text
            style={{
              color: "red",
              fontSize: 18,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            Subscribe
          </Text>
        </View>

        {/* Comments */}
        <Pressable
          onPress={openComments}
          style={{ padding: 10, marginVertical: 10 }}
        >
          <Text style={{ color: "white" }}>Comments 333</Text>
          {comments.length > 0 && <VideoComment comment={comments[0]} />}
        </Pressable>

        {/*} All comments */}
        <BottomSheetModal
          ref={commentsSheetRef}
          snapPoints={["70%"]}
          index={0}
          backgroundComponent={({ style }) => (
            <View style={[style, { backgroundColor: "#4d4d4d" }]} />
          )}
        >
          <VideoComments comments={comments} videoID={video.id} />
        </BottomSheetModal> 
      </View>
    </View>
  );
};

const VideoScreenWithRecommendation = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#141414", flex: 1 }}>
      <BottomSheetModalProvider>
        <FlatList
          data={videos} /* simulated recommendations data*/
          renderItem={({ item }) => <VideoListItem video={item}/>}
          ListHeaderComponent= {<VideoScreen />}
        />
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default VideoScreenWithRecommendation;
