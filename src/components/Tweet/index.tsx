/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {useTheme} from 'styled-components';
import Avatar from '../Avatar';
import Icon from '../Icon';
import {ITweetProps} from './types';

const Tweet: React.FC<ITweetProps> = ({tweet: originalTweet}) => {
  const theme = useTheme();
  const [_height, setHeight] = useState<number>(0);
  const HEIGHT = Dimensions.get('window').height;

  const renderImage = useCallback(() => {
    console.log('aquii');
    return (
      <Image
        onLoad={({
          nativeEvent: {
            source: {height},
          },
        }) => setHeight(height)}
        source={{uri: originalTweet.image}}
        style={{
          width: '100%',
          height: Math.min(_height, HEIGHT * 0.5),
        }}
        resizeMode={'cover'}
      />
    );
  }, [_height, HEIGHT, originalTweet.image]);

  const renderTweet = (tweet: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{marginRight: 12}}>
          <Avatar
            size="md"
            source={{
              uri: tweet.user.avatar,
            }}
          />
          {(tweet.isThread || !!tweet.comment) && (
            <View
              style={{
                backgroundColor: '#425364', // ligth equivalent #cfd9de
                width: 2,
                flex: 1,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          )}
        </View>
        <View style={{flex: 1, paddingBottom: 12}}>
          <View
            style={{
              width: '100%',
              marginBottom: 2,
              flexDirection: 'row',
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flexShrink: 1}}>
                <Text
                  style={{
                    color: theme.colors.secondary[1],
                    fontSize: 15,
                    fontWeight: '700',
                    lineHeight: 20,
                  }}
                  numberOfLines={1}>
                  {tweet.user.name}
                </Text>
              </View>
              {tweet.user.isVerified && (
                <View style={{marginLeft: 2, justifyContent: 'center'}}>
                  <Icon
                    name={'verified'}
                    color={theme.colors.secondary[1]} // se for light é accent
                    size={18.75}
                  />
                </View>
              )}
              <View style={{flexShrink: 1, marginLeft: 4}}>
                <Text
                  style={{
                    color: theme.colors.secondary[3],
                    fontSize: 15,
                    lineHeight: 20,
                  }}
                  numberOfLines={1}>
                  {`@${tweet.user.username}`}
                </Text>
              </View>
              <Text
                style={{
                  color: theme.colors.secondary[3],
                  fontSize: 15,
                  lineHeight: 20,
                  paddingHorizontal: 4,
                }}>
                -
              </Text>
              <Text
                style={{
                  color: theme.colors.secondary[3],
                  fontSize: 15,
                  lineHeight: 20,
                }}>
                {tweet.date}
              </Text>
            </View>
            <View
              style={{
                padding: 2,
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <Icon name={'dots'} color={theme.colors.secondary[3]} size={16} />
            </View>
          </View>
          <Text
            style={{
              color: theme.colors.secondary[1],
              fontSize: 15,
              lineHeight: 20,
            }}>
            {tweet.content}
          </Text>
          {!!tweet.image && (
            <View style={{borderRadius: 16, overflow: 'hidden', marginTop: 12}}>
              {renderImage()}
            </View>
          )}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 12,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name={'comment-outline'}
                color={theme.colors.secondary[3]}
                size={18.75}
              />
              {tweet.comments > 0 && (
                <Text
                  style={{
                    color: theme.colors.secondary[3],
                    fontSize: 13,
                    marginLeft: 4,
                    lineHeight: 16,
                  }}>
                  {tweet.comments}
                </Text>
              )}
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name={'retweet'}
                color={theme.colors.secondary[3]}
                size={18.75}
              />
              {tweet.retweets > 0 && (
                <Text
                  style={{
                    color: theme.colors.secondary[3],
                    fontSize: 13,
                    marginLeft: 4,
                    lineHeight: 16,
                  }}>
                  {tweet.retweets}
                </Text>
              )}
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name={tweet.likedByYou ? 'heart' : 'heart-outline'}
                color={tweet.likedByYou ? '#f91880' : theme.colors.secondary[3]}
                size={18.75}
              />
              {tweet.likes > 0 && (
                <Text
                  style={{
                    color: tweet.likedByYou
                      ? '#f91880'
                      : theme.colors.secondary[3],
                    fontSize: 13,
                    marginLeft: 4,
                    lineHeight: 16,
                  }}>
                  {tweet.likes}
                </Text>
              )}
            </View>
            <Icon
              name={'share'}
              color={theme.colors.secondary[3]}
              size={18.75}
            />
            <View style={{width: 18.75}} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        paddingTop: 12,
        paddingHorizontal: 16,
        borderColor: '#38444d', // light equivalent #eff3f4
        borderBottomWidth: 1,
      }}>
      {!!originalTweet.likedBy && (
        <View style={{flexDirection: 'row', marginTop: -4, marginBottom: 4}}>
          <View
            style={{
              width: 44,
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginRight: 12,
            }}>
            <Icon name={'heart'} color={theme.colors.secondary[3]} size={16} />
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: theme.colors.secondary[3],
                fontWeight: '700',
                fontSize: 13,
                lineHeight: 16,
              }}>
              {`${originalTweet.likedBy} curtiu `}
            </Text>
          </View>
        </View>
      )}
      <>
        {renderTweet(originalTweet)}
        {originalTweet.comment && renderTweet(originalTweet.comment)}
        {originalTweet.isThread && (
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 44,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 12,
                paddingVertical: 4,
              }}>
              <Avatar
                size="sm"
                source={{
                  uri: originalTweet.user.avatar,
                }}
              />
            </View>
            <View style={{paddingVertical: 8}}>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 20,
                  color: theme.colors.accent,
                }}>
                Show this thread
              </Text>
            </View>
          </View>
        )}
      </>
    </View>
  );
};

export default Tweet;
