import { _decorator, Component, Node, AudioClip, AudioSource } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = AudioController
 * DateTime = Fri Nov 26 2021 00:40:11 GMT+0800 (中国标准时间)
 * Author = jordiwang
 * FileBasename = AudioController.ts
 * FileBasenameNoExtension = AudioController
 * URL = db://assets/Script/AudioController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

export enum AUDIO_TYPE {
    COLLISION,
    END,
    RISE,
    SWOOTHING,
}

@ccclass('AudioController')
export class AudioController extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property({ type: AudioSource })
    audioSource: AudioSource = null;

    @property({ type: AudioClip })
    collisionAudio: AudioClip = null;

    @property({ type: AudioClip })
    endAudio: AudioClip = null;

    @property({ type: AudioClip })
    riseAudio: AudioClip = null;

    @property({ type: AudioClip })
    swoothingAudio: AudioClip = null;

    start() {
        // [3]
    }

    playAudio(audioType: AUDIO_TYPE) {
        switch (audioType) {
            case AUDIO_TYPE.COLLISION:
                this.audioSource.playOneShot(this.collisionAudio);
                break;
            case AUDIO_TYPE.END:
                this.audioSource.playOneShot(this.endAudio);
                break;
            case AUDIO_TYPE.RISE:
                this.audioSource.playOneShot(this.riseAudio);
                break;
            case AUDIO_TYPE.SWOOTHING:
                this.audioSource.playOneShot(this.swoothingAudio);
                break;
        }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
