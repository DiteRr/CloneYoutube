import { StyleSheet, Text, View, FlatList } from 'react-native';
import VideoListItem from "../../components/VideoListItem";

//Data JSON prob
import videos from '../../assets/data/videos.json'

function VideoList({}) {
  return (
    <View>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item}/> } 
      />
    </View>
  );
}

export default VideoList
