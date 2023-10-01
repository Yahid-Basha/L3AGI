from typing import Optional, List, Dict
from uuid import UUID
from pydantic import BaseModel
from datetime import datetime
from enum import Enum

class ChatStatus(Enum):
    IDLE = 'Idle'
    RUNNING = 'Running'
    STOPPED = 'Stopped'

class ChatUserMessageInput(BaseModel):
    prompt: str
    is_private_chat: bool
    local_chat_message_ref_id: Optional[str] = None
    agent_id: Optional[UUID] = None
    team_id: Optional[UUID] = None
    parent_id: Optional[UUID] = None
    
class ChatMessageInput(BaseModel):
    prompt: str
    chat_id: Optional[UUID] = None
    #todo what it is?
    local_chat_message_ref_id: Optional[str] = None
    parent_id: Optional[UUID] = None
    
class ChatInput(BaseModel):
    name: str
    agent_id: Optional[UUID] = None
    team_id: Optional[UUID] = None
    
class ChatOutput(BaseModel):
    name: str
    agent_id: Optional[UUID] = None
    team_id: Optional[UUID] = None
    agent_id: Optional[UUID] = None
    agent: Optional[Dict] = None
    team_id: Optional[UUID] = None
    team: Optional[Dict] = None
    sender_user_id: UUID
    sender_user: Optional[Dict] = None
    account_id: UUID


class ChatMessageOutput(BaseModel):
    id: UUID
    parent_id: Optional[UUID] = None
    parent: Optional[Dict] = None
    session_id: str
    agent_id: Optional[UUID] = None
    agent: Optional[Dict] = None
    team_id: Optional[UUID] = None
    team: Optional[Dict] = None
    sender_user_id: UUID
    sender_user: Optional[Dict] = None
    sender_account_id: UUID
    message: Dict
    thoughts: Optional[List[Dict]] = None
    created_on: datetime


class NegotiateOutput(BaseModel):
    url: str

class ChatStopInput(BaseModel):
    is_private_chat: bool
    agent_id: Optional[UUID] = None
    team_id: Optional[UUID] = None