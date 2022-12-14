import { Text, Title } from "@mantine/core";
import type { NextPage } from "next";
import { Layout } from "src/layout";

const Policy: NextPage = () => {
  return (
    <Layout>
      <div className="mt-10">
        <div>
          <Title>Terms of Service</Title>
          <Text>
            THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY
            KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </Text>
        </div>
        <div className="mt-10">
          <Title>Privacy Policy</Title>
          <Text>
            This site uses JSON Web Tokens and an in-memory database which
            resets every ~2 hours.
          </Text>
          <Text>
            Data provided to this site is exclusively used to support signing in
            and is not passed to any third party services, other than via SMTP
            or OAuth for the purposes of authentication.
          </Text>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
