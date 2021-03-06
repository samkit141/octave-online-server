/*
 * Copyright © 2018, Octave Online LLC
 *
 * This file is part of Octave Online Server.
 *
 * Octave Online Server is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * Octave Online Server is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Octave Online Server.  If not, see
 * <https://www.gnu.org/licenses/>.
 */

///<reference path='iuser.ts'/>

interface IWorkspace {
	sessCode:string;

	destroyD(message:string): void;
	destroyU(message:string): void;
	dataD(name:string, val:any): void;
	dataU(name:string, val:any): void;
	beginOctaveRequest(): void;

	on(event:string, callback: (...args:any[])=>void):void;
	removeAllListeners(): void;
	subscribe(): void;
	unsubscribe(): void;
}
