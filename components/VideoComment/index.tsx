import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
//import { Comment, User } from "../../src/models";

type Comment = {
  id : string,
  createdAt: string,
  comment: string,
  user : {
    name: string,
    image: string
  }
  likes: number,
  dislikes: number,
  replies: number
}


type VideoCommentProps = {
  comment: Comment;
}

const VideoComment = ({ comment }: VideoCommentProps) => {
  //const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    //DataStore.query(User, comment.userID as string).then(setUser);
  });

  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}
    >
      <Image
        style={{ width: 35, height: 35, borderRadius: 20 }}
        source={{ uri: comment.user?.image }}
      />
      <View>
        <Text style={{ color: "white", marginLeft: 10 }}>{comment.user.name}</Text>
        <Text style={{ color: "white", marginLeft: 10 }}>
          {comment.comment}
        </Text>
      </View>
    </View>
  );
};

export default VideoComment;
