/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Determines which tags desire A4A handling
 *
 * @param {!Window} win
 * @param {!Element} element
 * @returns {boolean}
 */
export function cloudflareIsA4AEnabled(win, element) {
  // check for an explicit attribute to enable A4A processing.
  // This could be just true, if all ads from this network are A4A, or any
  // other logic based upon configuration, client settings, etc.
  return !!element.getAttribute('data-a4a') && element.hasAttribute('src');
}
